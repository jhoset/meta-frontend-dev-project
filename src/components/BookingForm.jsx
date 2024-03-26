import { useState } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SectionLayout } from "../layout/SectionLayout";

export const BookingForm = ({ availableTimes, updateTimes }) => {

    const [reservationSuccess, setReservationSuccess] = useState(false);
    const [loading, setLoading] = useState(false);



    const initialValues = {
        resDate: "",
        resTime: "",
        guests: 1,
        occasion: "Birthday",
    };

    const validationSchema = Yup.object().shape({
        resDate: Yup.string().required("Date is required"),
        resTime: Yup.string().required("Time is required"),
        guests: Yup.number().required("Number of guests is required").min(1, "Must be at least 1 guest").max(10, "Cannot exceed 10 guests"),
        occasion: Yup.string().required("Occasion is required"),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // Simular una carga
        setSubmitting(true);
        console.log(values)

        // Simular el envío de la reserva
        setTimeout(() => {
            // Simulando que la reserva fue exitosa
            setSubmitting(false);
            console.log("Form submitted:", values);
            setReservationSuccess(true); // Esto dependerá de cómo manejes el estado de reservationSuccess
        }, 2000);
    };

    const handleChange = (event, setFieldValue) => {
        const { id, value } = event.target;
        setFieldValue(id, value);

        if (id === 'resDate') {
            updateTimes({ type: 'UPDATE_TIMES', payload: value });
        }
    };

    return (
        <div>
            {reservationSuccess ? (
                <SectionLayout>
                    <div className="alert alert-success text-center" role="alert">
                        <strong>Your reservation has been successfully processed</strong>
                        <br />
                        Thank you!
                    </div>
                </SectionLayout>

            ) : (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="booking-form">
                            <label htmlFor="res-date"><strong>Choose date</strong></label>
                            <Field
                                className="form-control"
                                type="date"
                                id="resDate"
                                name="resDate"
                                onChange={(event) => handleChange(event, setFieldValue)}
                            />
                            <ErrorMessage name="resDate" component="div" className="text-danger" />

                            <label htmlFor="res-time"><strong>Choose time</strong></label>
                            <Field className="form-control" as="select" id="resTime" name="resTime">
                                <option value=""> Select Time... </option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="resTime" component="div" className="text-danger" />

                            <label htmlFor="guests"><strong>Number of guests</strong></label>
                            <Field
                                className="form-control"
                                type="number"
                                placeholder="1"
                                min="1"
                                max="10"
                                id="guests"
                                name="guests"
                                onChange={(event) => handleChange(event, setFieldValue)}
                            />
                            <ErrorMessage name="guests" component="div" className="text-danger" />

                            <label htmlFor="occasion"><strong>Occasion</strong></label>
                            <Field className="form-control" as="select" id="occasion" name="occasion">
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Field>
                            <ErrorMessage name="occasion" component="div" className="text-danger" />

                            <button className="btn-primary w-100" type="submit" disabled={isSubmitting}>
                                {
                                    isSubmitting ? <>
                                        <div className="spinner-grow" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                        Loading...
                                    </>
                                        : 'Make Your Reservation'}
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

BookingForm.propTypes = {
    availableTimes: PropTypes.array,
    updateTimes: PropTypes.func
};
