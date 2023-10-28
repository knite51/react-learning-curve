import { Todo } from "../../app.interface";
import APIClient from "./apiClient";

export default new APIClient<Todo>('/todos');