interface PropsIframeVideo{
    src: string
}

export default function IframeVideo({src}: PropsIframeVideo){
    return(
        <iframe src={src} width="560" height="315"></iframe>
    )
}