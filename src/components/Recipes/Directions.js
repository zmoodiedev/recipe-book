import React from "react";
import './Directions.css';

const Directions = () => {
    return (
        <div className="directions">
            <h2>Directions</h2>
            <ol type="1" className="steps">
                <li className="step">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel tristique quam. Etiam imperdiet nec enim a tempor. Pellentesque euismod condimentum libero, ut interdum nunc dictum vitae.</li>
                
                <li className="step">Vestibulum condimentum sapien leo, non sodales lectus mollis ac. Aenean id porta massa. Fusce aliquet lobortis cursus. Quisque sodales egestas odio eu consequat. Nunc dictum gravida est, ac ultricies risus accumsan at.</li>

                <li className="step">Curabitur quis auctor eros, vel placerat ante. Nulla maximus viverra enim, at vehicula diam lobortis id. Sed accumsan risus a posuere ultricies. In nec ipsum quis leo commodo feugiat et sed urna. Nulla non nisi id neque elementum egestas. Sed at tincidunt turpis, vitae mollis orci. Pellentesque nec sodales arcu.</li>
                
                <li className="step">Vestibulum faucibus enim quis neque hendrerit, a faucibus erat pretium. Ut iaculis vel lectus sed hendrerit. Suspendisse non condimentum odio. Vestibulum eget hendrerit dolor. Nunc sed euismod tortor. Fusce eget tincidunt erat.</li>

                <li className="step">Aenean imperdiet massa at malesuada dignissim. Quisque placerat tellus in tristique fringilla. Maecenas nec augue in augue ultrices tristique. Vivamus arcu lorem, dictum quis enim et, hendrerit dictum augue. Nulla sodales est sed efficitur interdum. Mauris hendrerit auctor mattis. Sed nisl enim, sagittis efficitur tincidunt aliquet, sagittis et justo.</li>
                
                <li className="step">Duis rhoncus tellus sed velit sollicitudin, sit amet molestie dui laoreet.</li>
            </ol>
        </div>
    );
};

export default Directions;