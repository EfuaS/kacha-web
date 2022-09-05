export default function Button(props) {
    return(
        <div>
            <button type="submit" className="w-full h-12 kacha-orange rounded-lg text-white monserat font-bold text-xl ">
                {props.name}</button>
        </div>
    )
}