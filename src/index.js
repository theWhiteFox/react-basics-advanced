// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import Segment from './Segment';
import SegmentDetail from './SegmentDetail';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <Message
        header="Changes in Service"
        content="We just updated our privacy policy here to better service our customers"
      />
      <div>
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer
          </div>
          <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
          <SegmentDetail
            header="For Your Information"
            text="I'm baby photo booth offal tofu gastropub. 
            Humblebrag cronut palo santo four loko DIY. Organic sartorial leggings artisan, 
            slow-carb chillwave vaporware hell of ugh snackwave shoreditch tumblr"
          />
        </Segment>
      </div>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          post="Great Job"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          post="Nice one !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 8:35PM"
          post="Looks OK"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and display it
ReactDOM.render(<App />, document.querySelector('#root'));

