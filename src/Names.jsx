function Names() {
    const names = ['Uzair', 'Mahesh', 'Shabuddin', 'John', 'Joseph'];
    // map, filter, reduce
    /*
        <ul>
            <li>Uzair</li>
            <li>Uzair</li>
            <li>Uzair</li>
        </ul>
    */
    return <div>
        <ul>
            {
                names.map(function (name) {
                    return <li> {name} </li>
                })
            }
        </ul>
    </div >;
}

export default Names;