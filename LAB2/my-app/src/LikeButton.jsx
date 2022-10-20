const LikeButton = () => {

  const likeButton = []
  
  for (let i = 0; i < 10; i++) {
   likeButton.push(<button>Like!</button>)
    
  }

  return (
    <div>
      {likeButton}
    </div>
  )  
}


export default LikeButton;