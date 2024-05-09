import React, { useState } from "react";
import { FormDetails, ApplicantDetailsInterface } from "../Utilities/constants";
import TextField from "./TextField";
import { LabelField } from "./LabelField";
import { NumberField } from "./NumberField";
import { DateField } from "./DateField";
import { SelectFieldProps } from "./SelectField";
import { stateList } from "../Utilities/constants";

const AddForm = () => {
  const [formData, setFormData] = useState<ApplicantDetailsInterface>(
    {} as ApplicantDetailsInterface
  );
  // Function to handle changes in form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, "formData");
  };

  return (
    <div className="">
      <h2 className="text-primary text-center mt-4 fs-5 fw-semibold">
        Add Form
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container my-5 ">
          <div className="shadow px-4 py-2 rounded row">
            {FormDetails.map((list: any) => (
              <>
                <div className="col-lg-3 col-sm-12 " key={list.id}>
                  {list.type === "text" && (
                    <>
                      <LabelField label={list.label} id={list.id} />
                      <TextField
                        //   error={validation}
                        id={list.id}
                        readonly={list.readonly}
                        name={list.name}
                        HandleChange={(e) => handleChange(e)}
                      />
                    </>
                  )}
                  {list.type === "number" && (
                    <>
                      <LabelField label={list.label} id={list.id} />
                      <NumberField
                        id={list.id}
                        readonly={list.readonly}
                        name={list.name}
                        HandleChange={(e) => handleChange(e)}
                      />
                    </>
                  )}
                  {list.type === "date" && (
                    <>
                      <LabelField label={list.label} id={list.id} />
                      <DateField
                        id={list.id}
                        readonly={list.readonly}
                        name={list.name}
                        HandleChange={(e) => handleChange(e)}
                      />
                    </>
                  )}
                  {
                    /* ["stateName", "permanentState", "officeState"].includes(
                    list.name
                  ) && */
                    list.type === "select" && (
                      <>
                        <LabelField label={list.label} id={list.id} />
                        <SelectFieldProps
                          id={list.id}
                          name={list.name}
                          options={stateList}
                          HandleChange={(e) => handleChange(e)}
                        />
                      </>
                    )
                  }
                  {/*  {["stateName", "permanentState", "officeState"].includes(
                    list.name
                  ) &&
                    list.type === "select" && (
                      <>
                        <LabelField label={list.label} id={list.id} />
                        <SelectFieldProps
                          id={list.id}
                          name={list.name}
                          options={stateList}
                          HandleChange={(e) => handleChange(e)}
                        />
                      </>
                    )} */}
                </div>
              </>
            ))}
            <div className="text-center my-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
