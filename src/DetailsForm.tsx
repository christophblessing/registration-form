import React, { ChangeEvent } from "react";

interface Props {
  id: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Details extends React.Component<Props> {
  id: string;

  constructor(props: Props) {
    super(props);

    this.id = props.id;
  }

  render() {
    return (
      <div className="well">
        <h3>Family Member</h3>
        <div className="form-group">
          <label>Surname / Doctoral Degree</label>
          <input className="form-control" onChange={this.props.handleChange} />
        </div>

        <div className="form-group">
          <label>Birth Name</label>
          <input className="form-control" />
          <small>(if applicable)</small>
        </div>

        <div className="form-group">
          <label>First Name(s)</label>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="male"
                onChange={this.props.handleChange}
                name={this.id + "-gender"}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="female"
                onChange={this.props.handleChange}
                name={this.id + "-gender"}
              />
              Female
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="div"
                onChange={this.props.handleChange}
                name={this.id + "-gender"}
              />
              Div.
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            className="form-control"
            type="date"
            onChange={this.props.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Place of Birth</label>
          <input className="form-control" onChange={this.props.handleChange} />
          <small>(city and country)</small>
        </div>

        {/* Start Marital Relationship */}
        <div className="form-group">
          <label>Marital Relationship</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="single"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Single
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="married"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Married
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="divorced"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Divorced
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="widowed"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Widowed
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="civil partnership"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Civil Partnership
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="annulled civil partnership"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Annulled Civil Partnership
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="widowed civil partnership"
                onChange={this.props.handleChange}
                name={this.id + "-maritalRelationship"}
              />
              Widowed Civil Partnership
            </label>
          </div>
        </div>
        {/* End Marital Relationship */}

        {/* Start Religion */}
        <div className="form-group">
          <label>Religion</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="lutheran"
                onChange={this.props.handleChange}
                name={this.id + "-religion"}
              />
              Lutheran
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="roman catholic"
                onChange={this.props.handleChange}
                name={this.id + "-religion"}
              />
              Roman Catholic
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="jewish"
                onChange={this.props.handleChange}
                name={this.id + "-religion"}
              />
              Jewish Com. Hamb.
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="reformed churches"
                onChange={this.props.handleChange}
                name={this.id + "-religion"}
              />
              Reformed Churches
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="other"
                onChange={this.props.handleChange}
                name={this.id + "-religion"}
              />
              Other religious communities / no statement / none
            </label>
          </div>
        </div>
        {/* End Religion */}

        <div className="form-group">
          <label>Current Nationalities</label>
          <input className="form-control" onChange={this.props.handleChange} />
        </div>

        <div className="form-group">
          <label>ID Card</label>
          <input className="form-control" onChange={this.props.handleChange} />
          <small>
            Issuing authority, date of issue, expiry date and serial number
          </small>
        </div>

        <div className="form-group">
          <label>Passport</label>
          <input className="form-control" onChange={this.props.handleChange} />
          <small>
            Issuing authority, date of issue, expiry date and serial number
          </small>
        </div>
      </div>
    );
  }
}

export default Details;
