
export function VideoCard(props: any) {
    return (
        <div className="p-3 cursor-pointer">
            <img className="rounded-xl" src={props.image}></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className="rounded-full" src={props.thumbImage}></img>
                </div>
                <div className="col-span-11 pl-3">
                    <div>
                    {props.title}
                    <div className="col-span-11 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.views} . {props.time}
                </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}
