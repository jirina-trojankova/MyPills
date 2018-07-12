import * as React from 'react';

interface HeadlineViewProps {
    data: number;
}

const HeadlineView = (props: HeadlineViewProps) => {
    return(
      <div>
          number = {props.data}
      </div>
  );
};

export default HeadlineView;