import { Cardview } from '../components/Cardview';
import colorvalue from '../Utils/adamsbridge-cs.json';
const colorsystem = () => {
  console.log(colorvalue);
  return (
    <div>
      <div className="row">
        {colorvalue.map((item) => (
          <div className="col-md-4 col-sm-12 col-lg-4 my-2">
            <Cardview bgcolor={item.color} color={item.color} name={item.name}></Cardview>
          </div>
        ))}
      </div>
    </div>
  );
};
export default colorsystem;
