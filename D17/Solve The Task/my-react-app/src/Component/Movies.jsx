const User = (props) => {
  console.log(props);
  return (
    <div style={{ color: "white", margin: "10px auto" }}>
      <hr style={{ margin: 50 }}></hr>

      <h2 style={{ textAlign:"center",fontSize:50    }}>{props.MovieName}</h2>
      <div style={{ textAlign:"center"  }}>
        
        <img style={{ borderRadius: 50,textAlign:"center"  }}src={props.poster} alt={props.MovieName} width={700}/>
      </div>

      <div style={{ textAlign:"center",paddingTop:30 }}>
       <h4 style={{ color:"yellow",paddingLeft:100,width:1300 }}> {props.title}</h4>
      </div>
    </div>
  );
};

export default User;
