import React from "react";
import "../../screen/Search/Search";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";



const { Provider, Consumer } = React.createContext({});

const Accordion = ({ children }) => <div>{children}</div>;

class AccordionItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         expanded: this.props.expanded || false
      };

      this.toggleVisibility = this.toggleVisibility.bind(this);
   }

   toggleVisibility() {
      this.setState(prevState => ({
         expanded: !prevState.expanded
      }));
   }
   render() {
      return (
         <Provider
            value={{
               expanded: this.state.expanded,
               onClick: this.toggleVisibility
            }}
         >
            {this.props.children}
         </Provider>
      );
   }
}

const AccordionItemTitle = ({ children }) => (
   <Consumer>
      {({ expanded, onClick }) => (
         <h2 className="title">
            <button
               className="text-input btn-Acardeon"
               aria-expanded={expanded ? "true" : "false"}
               onClick={onClick}
            >
               {children}
            </button>
         </h2>
      )}
   </Consumer>
);

const AccordionItemBody = ({ children }) => (
   <Consumer>
      {({ expanded }) => (
         <div className="body" hidden={!expanded}>
            {children}
         </div>
      )}
   </Consumer>
);

// Example usage
const ExampleSimple = () => (

   <Accordion>
      <AccordionItem expanded>
         <AccordionItemTitle>ساعت دوره</AccordionItemTitle>
         <AccordionItemBody>
            <div className="lachakFlex">
            <div className="progress"> 
            <div className="lachak"></div>
            <div 
            className="progressBar"
             ><PRogressBar></PRogressBar></div>
            </div>
            </div>
         </AccordionItemBody>
      </AccordionItem>

      {/* <AccordionItem>
         <AccordionItemTitle>Title Two</AccordionItemTitle>
         <AccordionItemBody>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
               inventore velit sint quod blanditiis, sapiente voluptatibus,
               molestiae, dolore ipsam labore quaerat veritatis fuga libero!
               Explicabo aperiam sapiente optio consectetur placeat.
            </p>
         </AccordionItemBody>
      </AccordionItem> */}
   </Accordion>
);

export default ExampleSimple;


const PRogressBar = () => {
   return <ProgressBar className="wrapperrr"  completedClassName="barCompleted" completed={60} maxCompleted={1000000000}/>;
 };