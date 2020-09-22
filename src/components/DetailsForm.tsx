import React, { ChangeEvent } from "react";
import { Details } from "../types/types";

interface Props {
  id: number;
  details: Details | null;
  handleChange: (value: Details, index: number) => void;
}

export class DetailsForm extends React.Component<Props> {
  id: number;
  details: Details;

  constructor(props: Props) {
    super(props);

    this.id = props.id;
    this.handleChange = this.handleChange.bind(this);

    if (props.details) {
      this.details = props.details as Details;
    } else {
      this.details = {
        surname: "",
        birthName: "",
        firstName: "",
        gender: "",
        dateOfBirth: "",
        placeOfBirth: "",
        maritalRelationship: "",
        religion: "",
        currentNationalities: "",
        idCard: "",
        passport: "",
      };
    }

    this.props.handleChange(this.details, this.id);
  }

  isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0;
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = this.id;
    const value = event.target.value;
    const key = this.parseKey(event.target.name, this.id.toString());

    this.details[key as keyof Details] = value;
    this.props.handleChange(this.details, id);
  };

  // radios use id in name tag to distinguish from the radios from other DetailForms
  parseKey = (key: string, id: string): string => {
    return key.replace(id, "");
  };

  render() {
    return (
      <div className="well">
        <div className="form-group">
          <label>Surname / Doctoral Degree</label>
          <input
            className="form-control"
            name="surname"
            value={this.details.surname}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Birth Name</label>
          <input
            className="form-control"
            name="birthName"
            value={this.details.birthName}
            onChange={this.handleChange}
          />
          <small>(if applicable)</small>
        </div>

        <div className="form-group">
          <label>First Name(s)</label>
          <input
            className="form-control"
            name="firstName"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="male"
                onChange={this.handleChange}
                name={this.id + "gender"}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="female"
                onChange={this.handleChange}
                name={this.id + "gender"}
              />
              Female
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="div"
                onChange={this.handleChange}
                name={this.id + "gender"}
                id="gender"
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
            name="dateOfBirth"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Place of Birth</label>
          <input
            className="form-control"
            name="placeOfBirth"
            onChange={this.handleChange}
          />
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
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Single
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="married"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Married
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="divorced"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Divorced
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="widowed"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Widowed
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="civil partnership"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Civil Partnership
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="annulled civil partnership"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
              />
              Annulled Civil Partnership
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value="widowed civil partnership"
                onChange={this.handleChange}
                name={this.id + "maritalRelationship"}
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
                onChange={this.handleChange}
                name={this.id + "religion"}
              />
              Lutheran
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="roman catholic"
                onChange={this.handleChange}
                name={this.id + "religion"}
              />
              Roman Catholic
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="jewish"
                onChange={this.handleChange}
                name={this.id + "religion"}
              />
              Jewish Com. Hamb.
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="reformed churches"
                onChange={this.handleChange}
                name={this.id + "religion"}
              />
              Reformed Churches
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="other"
                onChange={this.handleChange}
                name={this.id + "religion"}
              />
              Other religious communities / no statement / none
            </label>
          </div>
        </div>
        {/* End Religion */}

        <div className="form-group">
          <label>Current Nationalities</label>
          <input
            className="form-control"
            name="currentNationalities"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>ID Card</label>
          <input
            className="form-control"
            name="idCard"
            onChange={this.handleChange}
          />
          <small>
            Issuing authority, date of issue, expiry date and serial number
          </small>
        </div>

        <div className="form-group">
          <label>Passport</label>
          <input
            className="form-control"
            name="passport"
            onChange={this.handleChange}
          />
          <small>
            Issuing authority, date of issue, expiry date and serial number
          </small>
        </div>
      </div>
    );
  }
}

export default DetailsForm;
