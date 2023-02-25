import Page from "../components/Page/Page"
import styles from "../styles/privacy.module.scss"

export default function Home() {
    return (
        <Page
            className={styles.privacy}
            pageTitle={["Datenschutzerklärung", "Privacy Policy"]}
            showNav
        >
            <p>
                Anim deserunt est eiusmod reprehenderit reprehenderit aliquip
                laborum incididunt fugiat voluptate et. Minim pariatur nisi sint
                dolore quis aliquip sit voluptate quis exercitation aliqua
                consectetur pariatur. Aute duis fugiat ipsum laboris.
            </p>

            <p>
                Exercitation elit aliqua et fugiat consequat. Duis do minim
                velit ullamco fugiat est dolor deserunt ea. Sit aute deserunt
                incididunt proident anim aute officia ex Lorem quis quis.
                Nostrud ad nisi deserunt anim non velit dolore aliquip sit
                proident nostrud veniam.
            </p>

            <p>
                Nostrud dolore consequat mollit aliqua eiusmod commodo aute
                dolore elit nostrud non duis elit pariatur. Consectetur dolor
                dolore ea ad veniam nostrud ea eu laboris qui quis velit velit
                mollit. Excepteur irure exercitation nulla deserunt non nostrud
                nostrud elit ex in nulla quis et.
            </p>

            <p>
                Quis consectetur dolor enim aliqua. Velit dolor velit et
                exercitation incididunt qui qui veniam in anim ad eu. Tempor sit
                eiusmod ea sunt eu laboris est ad dolore duis ex et. Enim ipsum
                anim aliqua eiusmod nisi nulla dolore incididunt non irure
                proident. Enim aute duis commodo dolor laborum et eu excepteur
                laborum ex consequat. Duis anim magna minim irure occaecat non
                duis ut nostrud non adipisicing esse dolore amet.
            </p>
        </Page>
    )
}
