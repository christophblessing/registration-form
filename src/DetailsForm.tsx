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
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="male"
            id="male"
            onChange={this.props.handleChange}
            name={this.id + "-gender"}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            value="female"
            id="female"
            onChange={this.props.handleChange}
            name={this.id + "-gender"}
          />
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

        <div className="form-group">
          <label>Single</label>
          <input
            type="radio"
            className="form-control"
            value="single"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />
          <label>Married</label>
          <input
            type="radio"
            value="married"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />
          <label>Divorced</label>
          <input
            type="radio"
            value="divorced"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />
          <label>Widowed</label>
          <input
            type="radio"
            value="widowed"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />

          <label>Civil Partnership</label>
          <input
            type="radio"
            value="civil partnership"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />

          <label>Annulled Civil Partnership</label>
          <input
            type="radio"
            value="annulled civil partnership"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />

          <label>Widowed Civil Partnership</label>
          <input
            type="radio"
            value="widowed civil partnership"
            onChange={this.props.handleChange}
            name={this.id + "-maritalRelationship"}
          />
        </div>

        {/*
Lutheran
Roman Catholic
Jewish Com. Hamb. Reformed Churches
Other religious communities / no statement / none */}

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
