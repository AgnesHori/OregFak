import './Home.css';
import { MyNavbar } from './MyNavbar';

export const Home=()=>{

    return (
        <>
        <MyNavbar />
        <main className="row justify-content-center text-white">
        <div className="col-md-6">
            <div className="intro p-5 text-center">
                <h3>Hédervári Árpád-tölgy – Kora: kb. 800 év</h3>
                <p> (Magyarország legidősebb fája)</p>
                <p className="p text-left">
                    Magyarország legidősebb fája a hédervári Boldogasszony kápolna közelében található.
                    A néphagyomány úgy tartja, hogy a kocsányos tölgy mellett, maga Árpád vezér pihent meg és tartott haditanácsot 907-ben,
                    a Pozsonyi csata előtt, sőt még nyomot is hagyott a törzsében a fejedelem lovának kötőféke.
                    A szakemberek azonban úgy vélik, hogy a fa Árpád idejében még nem élt, bár így is tekintélyes kort ért meg,
                    hiszen körülbelül 800 éves. Az 1942 óta védett Árpád-tölgy korhadásnak indult és 2007 áprilisában derékba tört,
                    de a civil összefogásnak köszönhetően életben maradt. A beteg részeit eltávolították, az egyetlen megmaradt
                    ágát (a négyből) tartógúla és kötelek segítségével sikerült megmenteni. A fa azóta is minden évben virágzik.
                </p>
            </div>
        </div>
        </main>
       </>
      )
    
}