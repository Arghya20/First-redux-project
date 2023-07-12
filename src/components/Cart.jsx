import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const item = useSelector((store) => store.cart);
  const handelRemove = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div>
      <h1 className="text-center mt-8 text-2xl font-bold ">
        Your total item - {item.length}
      </h1>
      {item.map((itm) => (
        <div
          className="overflow-x-auto w-8/12 justify-center mx-auto my-10 shadow-md rounded-xl"
          key={itm.id}
        >
          <table className="table bg-white ">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={itm.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{itm.title}</td>
                <td>{itm.price}</td>
                <th>
                  <button
                    onClick={() => handelRemove(itm.id)}
                    className="btn btn-outline btn-error"
                  >
                    Remove
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Cart;
