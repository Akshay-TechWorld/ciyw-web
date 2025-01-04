import axios from "axios";
import ApiConstants from "../Constants/ApiConstants";

export function createEmployee(data: any, config: any = {}) {
    const apiUrl = `${ApiConstants.ContextPath}/v1/employees`;
    return new Promise((resolve, reject) => {
        axios
            .post(apiUrl, data, config)
            .then((response) => response.data)
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}

export function fetchEmployeeList(config: any = {}) {
    const apiUrl = `${ApiConstants.ContextPath}/v1/employees`;
    return new Promise((resolve, reject) => {
        axios
            .get(apiUrl, config)
            .then((response) => {
                console.log(response.data);
                response.data
            })
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error)
            });
    });
}
