/* eslint-disable @typescript-eslint/no-explicit-any */
// Importamos los objetos que vamos a utlizar para implementar la creacion de un Tutorial
import { ChangeEvent, Component } from "react";
import TutorialService from "../services/TutorialService";
import ITutorialData from "../types/Tutorial";

type Props = object;

type State = ITutorialData & {
    submitted: boolean
};

export default class AddTutorial extends Component<Props, State> {
    
  constructor(props: Props) {
    
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
        id: "",
        title: "",
        description: "",
        published: false,
        submitted: false
    };
}
// Metodos para observar el comportamiento del dato que ingresa
onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value
    });
  }

onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      description: e.target.value
    });
  }
// Metodo para guardar el tutorial
saveTutorial() {
    const data: ITutorialData = {
      id: "",  
      title: this.state.title,
      description: this.state.description,
      published: false
    };

    TutorialService.saveTutorial(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
// Limpia los campos del formulario para llenar un nuevo tutorial
newTutorial() {
  this.setState({
    id: "",
    title: "",
    description: "",
    published: false,
    submitted: false
  });
}

render() {
  const { submitted, title, description } = this.state;
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newTutorial}>
            Add Tutorial
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>

          <button onClick={this.saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
}
