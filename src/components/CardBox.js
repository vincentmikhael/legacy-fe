export default function CardBox(props){
    return(
        <div className="card shadow-none p-4 mt-3 rounded-lg">
            {props.children}
        </div>
    )
}