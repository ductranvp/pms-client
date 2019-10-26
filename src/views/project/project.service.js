import request from "@/config/api/request";

const baseUrl = "api/project";
let ProjectService = {
    create(payload) {
        return request.post(
            baseUrl + "/create",
            JSON.stringify(payload)
        )
    },
    getAll(payload) {
        return request.get(
            baseUrl + "/all"
        )
    },
    getTask(payload) {
        return request.get(
            baseUrl + "/get-task/" + payload,
        )
    },
    get(payload) {
        return request.get(
            baseUrl + "/get/" + payload
        )
    },
    update(payload) {
        return request.put(
            baseUrl + "/update",
            JSON.stringify(payload)
        )
    },
    delete(payload) {
        return request.delete(
            baseUrl + "/delete/" + payload
        )
    },
    checkProjectAdmin(payload){
        return request.get(
            baseUrl + "/check-project-admin/" + payload
        )
    }
};

export default ProjectService;
