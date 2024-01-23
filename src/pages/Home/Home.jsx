import classes from "./home.module.css";
import { Progress } from '@mantine/core';

const Home = () => {



  return (

    
    <div className={classes.root}>
      <div className={classes.firstSection}> 
        <div className={classes.backgroundFirstSection} >
        <img src="/src/assets/alexia.png"/>
        <h1> &lt;h1&gt;LANG Alexia &lt;br/&gt; <br/> &nbsp;&nbsp;&nbsp;&nbsp; Developpeuse Web Junior <br/>&lt;/h1&gt; </h1>
        </div>
      </div>
      <div className={classes.aPropos}>
        <div >
          <h2>A propos</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, nesciunt totam? Ex officiis voluptas fuga explicabo velit. Sapiente commodi exercitationem distinctio praesentium, accusamus qui consectetur voluptatum unde omnis quo quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti quos aliquam porro! Ad, adipisci? Sint, expedita! Soluta, ratione ullam! Numquam laudantium non accusamus nostrum necessitatibus consequuntur, reiciendis quod at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ea sunt! Saepe ullam enim porro exercitationem delectus magni consectetur repellendus quasi temporibus modi error rem officiis, dignissimos numquam magnam atque.</p>
        </div>
        <img className={classes.pictApropos} src="/src/assets/alexiaPetite.png"></img>
      </div>
      <div className={classes.skills}>
        <h2>Mes compétences</h2> 
        <p>Lorem error excepturi eaque distincg elit. nesciunt culpa ullam. Dolore earum ratione id.</p>
        <div className={classes.skillsBlock}>
          <div>
              <Progress className={classes.bar} color="rgba(255, 175, 105, 1)" value={90} animated /> <br/>
              <Progress color="rgba(255, 175, 105, 1)" value={40} animated /> <br/>
              <Progress color="rgba(255, 175, 105, 1)" value={50} animated /> <br/>
          </div>
          <div> coucocucou</div>
        </div>
      </div>
      <div>
      <div>
      <h1>Compétences</h1>

    
      
    </div>
      </div>
    </div>
  );
};

export { Home };