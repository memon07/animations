const StyleRoot = Radium.StyleRoot; // for online ide
import {StyleRoot} from 'radium';

// Animations of component
const animations = {
  rotate: Radium.keyframes({
    '0%': {
      fill: 'tomato',
      transform: 'rotate(0deg) scale(0.5)',
      transform: 'scale(0.5)'
    },
    '50%': {
      fill: 'gold',
      transform: 'rotate(180deg) scale(1)',
    },
    '100%': {
      fill: 'tomato',
      transform: 'rotate(360deg) scale(0.5)',
    }
  })
}
                           
// Styling of component
const styles = {
  svg: {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 1.5,
    width: "150px"
  },
  rect: {
    transformOrigin: "50% 50%",
    animation: 'x 20s linear infinite',
    animationName: animations.rotate
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "25vh"
  },
}

const App = Radium(React.createClass({
  render: function() {
    return (
      <div style={styles.wrap}>
        <svg style={styles.svg}>
          <rect style={styles.rect} x="25" y="25" width="100" height="100"/>
        </svg>
      </div>
      )
  }
}))

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot> 
  ,document.querySelector('#app') // for online ide
  ,document.getElementById('root')
)
