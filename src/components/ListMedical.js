import React from "react";
import { NavLink } from "react-router-dom";

const ListMedical = (list) => {
    const { id, fullName } = list;
    return (
            <tr>
                <td>
                    <NavLink to={`/editPatient/${id}`}>{id}</NavLink>
                </td>
                <td>(CFO)</td>
                <td>{fullName}</td>
                <td>64</td>
                <td>
                    <span className="tag tag-success"> Active</span>
                </td>
            </tr>
    );
};

export default ListMedical;