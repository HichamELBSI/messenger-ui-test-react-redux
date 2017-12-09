// @flow
import React from "react";
import { connect } from "react-redux";
import type { State } from "./reducer";
import { toggleAdmin } from "./actions";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  toggleAdmin
};

type Props = {
  user: $PropertyType<State, "user">,
  toggleAdmin: typeof toggleAdmin
};

const User = ({ user, toggleAdmin }: Props) => (
  <div>
    <label>
      Admin
      <input
        name="isAdmin"
        type="checkbox"
        checked={user.admin}
        onChange={toggleAdmin}
      />
    </label>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(User);
