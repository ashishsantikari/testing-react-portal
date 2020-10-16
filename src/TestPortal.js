import React from 'react';
import PropTypes from 'prop-types';
import {Button, Popover} from "@blueprintjs/core";

const Content = () => (
    <div>
        <span>hello world</span>
    </div>
);

const TestPortal = (props) => {
  return (
      <div>
          <h2>Rendering in {props.renderInPortal ? 'portal' : 'container'}</h2>
          <Popover content={<Content />} usePortal={props.renderInPortal}>
              <Button>Click here</Button>
          </Popover>
      </div>
  );
};

TestPortal.propTypes = {
    renderInPortal: PropTypes.bool
};

export default TestPortal;