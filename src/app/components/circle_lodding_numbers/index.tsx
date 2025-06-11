import React, { useRef, useEffect, useState } from 'react';

// Hook personalizado para observar a interseção
function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement>, // RefObject para o elemento a ser observado
  options: IntersectionObserverInit = {},
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) {
      console.warn("useIntersectionObserver: Elemento não encontrado para observação.");
      return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersect(entry, observerInstance);
        }
      });
    }, options);

    observer.observe(currentElement);

    // Função de limpeza
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options, onIntersect]); // Dependências: ref, opções, e a função de callback
}

function MyIntersectionComponent() {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [actionPerformed, setActionPerformed] = useState(false);

  // Ação a ser executada quando o elemento entra na viewport
  const handleIntersection = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    alert('Elemento entrou na viewport!', entry.target);
    setIsVisible(true);

    if (!actionPerformed) {
      alert('Executando ação pela primeira vez!');
      // Por exemplo: carregar dados, iniciar uma animação CSS, etc.
      setActionPerformed(true); // Marca que a ação já foi executada
      observer.unobserve(entry.target); // Para de observar após a ação
    }
  };

  // Usando o hook personalizado
  useIntersectionObserver(
    myDivRef,
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 10% do elemento visível
    },
    handleIntersection
  );

  return (
    <div>
      <p style={{ height: '1000px', background: '#eee', padding: '20px' }}>
        Role para baixo para ver o elemento...
      </p>

      <div
        ref={myDivRef}
        style={{
          height: '300px',
          background: isVisible ? 'green' : 'red',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          transition: 'background 0.5s ease-in-out',
        }}
      >
        {isVisible ? 'Estou visível!' : 'Aguardando visibilidade...'}
      </div>

      <p style={{ height: '1000px', background: '#eee', padding: '20px' }}>
        Role para cima novamente...
      </p>
    </div>
  );
}

export default MyIntersectionComponent;Detalhes do item
Logotipo do Apps do Gemini
Apps do Gemini
Consulta: Estou com um pouco de problema em determinar o tipo do observer e o tipo do elemento, estou usando o useRef do react
Detalhes
event
Hoje, 11:16
apps
Apps do Gemini
chat
Com certeza! Quando você está usando useRef no React com a Intersection Observer API, a tipagem pode ser um pouco confusa no início, mas é bem direta quando você entende os conceitos.

Vamos abordar os tipos para o observer e para o elemento (que você referenciará com useRef).

1. Tipagem do Elemento com useRef
O useRef cria uma ref mutável cujo .current pode ser um elemento HTML. Para tipá-lo corretamente, você precisa saber qual é o tipo de elemento HTML que você está observando.

Por exemplo, se você está observando uma <div>, o tipo será HTMLDivElement. Se for uma <img>, será HTMLImageElement, e assim por diante. Se você não tem certeza e quer um tipo mais genérico que englobe a maioria dos elementos que podem ser observados, HTMLElement é uma boa escolha.

import React, { useRef, useEffect } from 'react';

function MyComponent() {
  // 1. Tipando o useRef para um HTMLDivElement
  //    O valor inicial é null, pois a ref só será atribuída após a montagem do componente.
  const myElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificamos se a ref.current existe antes de tentar observá-la
    if (myElementRef.current) {
      // O observer e o callback virão aqui
      // ...
    }
  }, []); // O useEffect roda uma vez após a montagem

  return (
    <div ref={myElementRef} style={{ height: '300px', background: 'lightblue', margin: '2000px 0' }}>
      Conteúdo do meu elemento
    </div>
  );
}

export default MyComponent;
2. Tipagem do Observer
O observer em si é uma instância de IntersectionObserver.

3. Tipagem do Callback da Intersection Observer API
O callback da Intersection Observer API recebe dois argumentos:

entries: Um array de IntersectionObserverEntry.
observer: A instância do IntersectionObserver que disparou o callback.
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const myElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = myElementRef.current; // Para facilitar a legibilidade e garantir que não é null

    if (currentElement) {
      // 2. Tipando a função de callback
      const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('O elemento está na viewport!', entry.target);
            // Sua ação aqui
            observer.unobserve(entry.target); // Opcional: para de observar após a primeira interseção
          }
        });
      };

      // 3. Tipando o IntersectionObserver
      const observer: IntersectionObserver = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });

      observer.observe(currentElement);

      // Limpeza: Importante para evitar vazamentos de memória
      return () => {
        if (currentElement) { // Verifica novamente se o elemento ainda existe
          observer.unobserve(currentElement);
        }
      };
    }
  }, []); // Array de dependências vazio para rodar apenas na montagem

  return (
    <div
      ref={myElementRef}
      style={{
        height: '300px',
        background: 'lightblue',
        margin: '2000px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2em',
      }}
    >
      Elemento Observado
    </div>
  );
}

export default MyComponent;
Exemplo Completo com Tipagem Aprimorada e Estado
Vamos combinar isso com um exemplo que usa o estado para mostrar quando o elemento está visível e também com uma função utilitária para encapsular a lógica.

import React, { useRef, useEffect, useState } from 'react';

// Hook personalizado para observar a interseção
function useIntersectionObserver(
  elementRef: React.RefObject<HTMLElement>, // RefObject para o elemento a ser observado
  options: IntersectionObserverInit = {},
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
) {
  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) {
      console.warn("useIntersectionObserver: Elemento não encontrado para observação.");
      return;
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersect(entry, observerInstance);
        }
      });
    }, options);

    observer.observe(currentElement);

    // Função de limpeza
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options, onIntersect]); // Dependências: ref, opções, e a função de callback
}

function MyIntersectionComponent() {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [actionPerformed, setActionPerformed] = useState(false);

  // Ação a ser executada quando o elemento entra na viewport
  const handleIntersection = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    console.log('Elemento entrou na viewport!', entry.target);
    setIsVisible(true);

    if (!actionPerformed) {
      console.log('Executando ação pela primeira vez!');
      // Por exemplo: carregar dados, iniciar uma animação CSS, etc.
      setActionPerformed(true); // Marca que a ação já foi executada
      observer.unobserve(entry.target); // Para de observar após a ação
    }
  };

  // Usando o hook personalizado
  useIntersectionObserver(
    myDivRef,
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 10% do elemento visível
    },
    handleIntersection
  );

  return (
    <div>
      <p style={{ height: '1000px', background: '#eee', padding: '20px' }}>
        Role para baixo para ver o elemento...
      </p>

      <div
        ref={myDivRef}
        style={{
          height: '300px',
          background: isVisible ? 'green' : 'red',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          transition: 'background 0.5s ease-in-out',
        }}
      >
        {isVisible ? 'Estou visível!' : 'Aguardando visibilidade...'}
      </div>

      <p style={{ height: '1000px', background: '#eee', padding: '20px' }}>
        Role para cima novamente...
      </p>
    </div>
  );
}

export default MyIntersectionComponent;















/*"use client"

import { useEffect, useRef, useState } from "react"
import CircleLodding from "./CircleLodding"


export default function ClircleLoddingNumber(){
    const [animate_state, setAnimateState] = useState<"paused"| "running">('paused')
    const conteiner = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        //Objeto de observação do elemento na viewport
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry=>{
                // Verdadeiro quando o elemento está na viewport
                if(entry.isIntersecting){
                    setAnimateState("running")

                    //parando de observar
                    observer.unobserve(entry.target)
                }
            })
        })

        //adicinando elemento para observação
        observer.observe(conteiner.current)

    }, [])
    

    return (
        <div id="conteiner" ref={conteiner}>
            <CircleLodding animate={animate_state}/>
        </div>
    )
}*/
