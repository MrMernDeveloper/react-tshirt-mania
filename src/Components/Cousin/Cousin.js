
import Friend from '../Special/Friend/Friend';




const Cousin = ({house}) => {
    return (
        <div>
            <p><small>House: {house}</small></p>
            <h4>Cousin</h4>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;