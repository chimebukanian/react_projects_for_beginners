import {Welcome} from './UserProfile';

export let styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f7f7f7',
        width: "60%",
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    text: {
        fontSize: '1.2rem',
        margin: '10px 0',
    }
}

export  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

export  function cbMap (name){
        return <Welcome key={name} name={name} />
    }

export let users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}]

export function withStyles(Component) {
  return (props) => {
    return <Component {...props} />
  }
}

export let Text  = (props) => {
  return <h1 style={{color: 'red'}}>{props.text}</h1>
}

export let StyledText = withStyles(Text);
