import { Fragment } from 'react';

function FragmentComp() {
  return (
    <Fragment> {/* 상위요소 */}
      <h1>Fragment</h1> {/* 하위요소 */}
      <>
        This is Contents
      </>
    </Fragment>
  );
}

export default FragmentComp; 