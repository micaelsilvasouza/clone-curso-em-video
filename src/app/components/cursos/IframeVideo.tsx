interface PropsIframeVideo{
    src: string
}

export default function IframeVideo({src}: PropsIframeVideo){
    return(
        <iframe 
            className="rounded-xl"
            width="100%" 
            height="100%" 
            src={src} 
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        >
        </iframe>
    )
}
