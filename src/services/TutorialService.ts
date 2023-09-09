import http from "../http-common";
import ITutorialData from "../types/Tutorial";

// Definicion de los metodos para el CRUD respectivo
class TutorialService{
    
    getAllTutorials = () => {
        return http.get<Array<ITutorialData>>("/tutorials");
    };
    
    getTutorialByID = (id: number) => {
        return http.get<ITutorialData>(`/tutorials/${id}`);
    };
    
    saveTutorial = (data: ITutorialData) => {
        return http.post<ITutorialData>("/tutorials", data);
    };
    
    updateTutorial = (id: number, data: ITutorialData) =>{
        return http.put<unknown>(`/tutorials/${id}`, data);
    };
    
    findTutorialByTitle = (title: string) => {
        return http.get<Array<ITutorialData>>(`/tutorials/${title}`);
    };
}

// Ponemos a disposicion de la aplicacion nuestro componente
export default new TutorialService;
