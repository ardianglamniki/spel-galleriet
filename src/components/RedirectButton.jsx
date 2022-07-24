const RedirectButton = ( {url} ) => {
    return (
        <button
            className="btn btn-success my-2"
            onClick={() => window.open(url)}
        >
            Läs mer
        </button>
    )
}

export default RedirectButton