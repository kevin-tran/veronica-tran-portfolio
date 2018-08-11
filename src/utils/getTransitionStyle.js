const getTransitionStyles = timeout => {
    return {
      entering: {
        opacity: 0,
      },
      entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
        height: '100%',
        width: '100%'
      },
      exiting: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0,
        height: '100%',
        width: '100%'
      },
    }
  }
  
  const getTransitionStyle = ({ timeout, status }) =>
    getTransitionStyles(timeout)[status]
  
  export default getTransitionStyle