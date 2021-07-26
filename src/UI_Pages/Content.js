
import data from '../Backend/Data'
import {useParams} from 'react-router-dom'

const obj = {
    height: '80vh',
}
const festival={
    color:'tomato',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background:'lightblue'
}
const food={
    color:'blue',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background:'#ff7979'
}

const places={
    color:'green',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    background:'#f9ca24'
}

const Content = () => {
    const {state}=useParams();
    console.log(state)
    if(state=='Maharashtra'){
    return (
        <>
            <div style={obj}>
            <h5>Maharashtra is the backbone of India</h5>
                <div style={festival}>
                   
                    <h6> Festivals Celebrated in Maharashtra are: </h6>
                    <ul style={{ listStyleType: 'none' }}> {data[0].festivals.map((value, index, array) => {
                        return <li>{value}</li>;
                    })}</ul>
                </div>
                <div style={food}>
                    <h6>Famous Food of Maharashtra are: </h6>
                    <ul style={{ listStyleType: 'none' }}> {data[0].food.map((value, index, array) => {
                        return <li>{value}</li>;
                    })}</ul>
                </div>
                <div style={places}>
                    <h6>Famous Tourist palce to visit in Maharashtra are: </h6>
                    <ul style={{ listStyleType: 'none' }}> {data[0].places.map((value, index, array) => {
                        return <li>{value}</li>;
                    })}</ul>
                </div>

            </div>
        </>
    );}
    else if(state=='UP')
    {
        return (
            <>
                <div style={obj}>
                <h5>Maharashtra is the backbone of India</h5>
                    <div style={festival}>
                       
                        <h6> Festivals Celebrated in Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[1].festivals.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
                    <div style={food}>
                        <h6>Famous Food of Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[1].food.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
                    <div style={places}>
                        <h6>Famous Tourist palce to visit in Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[1].places.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
    
                </div>
            </>
        );
    }
    else if(state=='Bihar')
    {
        return (
            <>
                <div style={obj}>
                <h5>Maharashtra is the backbone of India</h5>
                    <div style={festival}>
                       
                        <h6> Festivals Celebrated in Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[2].festivals.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
                    <div style={food}>
                        <h6>Famous Food of Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[2].food.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
                    <div style={places}>
                        <h6>Famous Tourist palce to visit in Maharashtra are: </h6>
                        <ul style={{ listStyleType: 'none' }}> {data[2].places.map((value, index, array) => {
                            return <li>{value}</li>;
                        })}</ul>
                    </div>
    
                </div>
            </>
        );
    }
    else{
        return (
            <div style={obj}>
        <h5>Welcome to this world</h5>
        </div>
        );
    }




}

export default Content;

