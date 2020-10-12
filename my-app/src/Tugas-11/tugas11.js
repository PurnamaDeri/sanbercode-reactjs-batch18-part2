import React from 'react'

class Tugas11 extends React.Component{
        constructor(props){
        super(props)
        this.state = {
          time: 100
        }
      }
    componentDidMount(){
        if (this.props.start !== undefined){
          this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }    
    tick() {
        this.setState({
          time: this.state.time - 1 
        });
    }
    waktu(){
        var date = new Date();

        var jam = date.getHours();
        if (jam < 10) jam = '0' + jam;
        var min = date.getMinutes();
        if (min < 10) min = '0' + min;
        var detik = date.getSeconds();
        if (detik < 10) detik = '0' + detik;
        
        var ampm = "AM";

        if(jam > 12)
        {
            jam -= 12;  ampm = "PM";
        }
        return (
        <a>{`${jam} : ${min} : ${detik} ${ampm}`}</a>
            
        )
    }    
    start(){
        var time = this.waktu();
        return(
            time
        )
    }
    render(){
        return (            
            <div>
                {this.state.time>0 ?

                <div className="waktu">
                  <div className="jam">
                    <h2>
                        sekarang jam : {this.start()}         
                    </h2>                            
                  </div>
                <div className="timer">
                    <h2>hitung mundur :  {this.state.time} </h2>  
                </div>

                </div>                
            :
            null}




            </div>
        )
    }
}

export default Tugas11;

