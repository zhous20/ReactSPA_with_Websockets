import React from 'react';

const PostBox = (props) => {
  return(
    <div className="post-body">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <img src={props.image} alt="Logo" className="picture">
    </img>
  )
}

const Problem = (props) => {
  return(
    <div className="problem">
      {props.problem}
    </div>
  )
}

const Priority = (props) => {
  return(
    <div className="priority">
      {props.priority}
    </div>
  )
}

const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}

const Post = (props) => {
  return(
    <div className="post">
      {props.post}
    </div>
  )
}

const PostCont = (props) => {
  return(
    <PostBox>
      <div className="inner-body">
        <Image image={props.image}/>
        <div className="body">
          <div className="inner-body">
            <Name name={props.name}/>   
          </div>
          <div class="pp">
          <Problem problem={props.problem}/>
          <Priority priority={props.priority}/>
          </div>
          <Post post={props.post}/>
        </div>
      </div>
    </PostBox>
  )
}

export { PostCont }