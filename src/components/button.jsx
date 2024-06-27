export default function Button({title}) {
    return (

        // you bring the fragment if it's more than one
        <button className="block bg-orange-600 border-8 rounded-full border-solid hover:bg-white">{title}</button>
    );
}