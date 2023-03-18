import Page from "../components/Page/Page"

const NotFound = () => {
    return (
        <Page pageTitle={["Seite nicht gefunden", "Page not found"]}>
            <p>Die gesuchte Seite wurde nicht gefunden :(</p>
        </Page>
    )
}

export default NotFound
