import React from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function UserForm() {
    const { handleSubmit, formState } = useForm()
    const { isSubmitting } = formState
    function submitForm(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 5000)  
        })
    }
    return (
        <div>
            <h2>Display Loader on Form Submit in React</h2>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="mt-2">
                    <button disabled={isSubmitting} className="btn btn-danger">
                        Submit
                        {isSubmitting && (
                            <span className="spinner-grow spinner-grow-sm ms-2"></span>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}