import { useRouteError } from "react-router-dom";
import Leaf from '../../assets/imgs/imgError/leaf_01.png';
import Leaf2 from '../../assets/imgs/imgError/leaf_02.png';
import Leaf3 from '../../assets/imgs/imgError/leaf_03.png';
import Leaf4 from '../../assets/imgs/imgError/leaf_04.png';
import BG from '../../assets/imgs/imgError/bg.png';
import Girl from '../../assets/imgs/imgError/girl.png';
import Trees from '../../assets/imgs/imgError/trees.png';

import './styles.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
       

            <section className="error">
                <div className="leaves">
                    <div className="set">
                        <div>
                            <img src={Leaf} alt="Leaf" />

                        </div>
                        <div>
                            <img src={Leaf2} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf3} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf4} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf2} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf3} alt="Leaf" />
                        </div>
                        <div>
                            <img src={Leaf4} alt="Leaf" />
                        </div>
                    </div>
                </div>
                <img src={BG} alt="background" className="background" />
                <img src={Girl} alt="girl" className="girl"/>
                <img src={Trees} alt="trees" className="trees" />
                <div className="login">
                    <h2>Ops!</h2>
                    <p>Um erro inesperado aconteceu, mas fique tranquilo
                        já estamos trabalhando para resolver</p>


                </div>
            </section>

       
    );
}