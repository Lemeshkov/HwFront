import HW1 from "../s2-homeworks/hw01/HW1";
import HW2 from "../s2-homeworks/hw02/HW2";

import s from './App.module.css';

function App() {
    return (
        <div className={s.App}>
            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            {/* <HW1 /> */}
            <HW2 />
            {/* <HW5 /> */}
        </div>
    )
}

export default App
