function FieldAnimal({ fieldAnimal }) {

    if ('cow' === fieldAnimal.animal) {
        return (
            <div className="cow">
            </div>
      );
    } else if ('sheep' === fieldAnimal.animal) {
        return (
        <div className="sheep">
        </div>
        );
    } else if ('horse' === fieldAnimal.animal) {
        return (
        <div className="horse">
        </div>
        );
    } else {
        return null;
    }
 
}

export default FieldAnimal;