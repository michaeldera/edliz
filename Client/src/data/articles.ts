/**
 * 
 * */

export class Articles {
    static Get = async (id: string ) => {
        try {
            fetch(`/api/articles/${id}`).then((response: any) => {
                const { data } = response.body;
                console.log(data);
                return data;
            })
        } catch (error) {
            console.error(`failed to fetch data from API. Error ${error}`);
        } finally {
            // return backup of local article
        }
    }

    static GetAll = async () => {
        try {
            fetch("api/articles").then((response: any) => {
                const { data } = response.data;
                return data;
            });
        } catch (error) {
            console.error(`failed to fetch data from API. Error ${error}`);
        } finally {
            //return backup of local articles
        }
    }
}