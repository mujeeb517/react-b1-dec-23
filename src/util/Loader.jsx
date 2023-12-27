function Loader() {
    return (<div className="flex absolute top-1/2 left-1/2 bg-gray-200 p-4">
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
        </div>
        <span className="m-1"> Loading...</span>
    </div>);
}

export default Loader;