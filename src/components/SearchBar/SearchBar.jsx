import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const searchBarSchema = Yup.object().shape({
  searchContent: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchContent: "",
};

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    if (!values.searchContent.trim()) {
      toast.error("Необхідно ввести текст для пошуку зображень");
      return;
    }
    onSetSearchQuery(values.searchContent);
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={searchBarSchema}
        onSubmit={handleSubmit}
      >
        <header>
          <Form>
            <div>
              <label>
                <Field
                  type="text"
                  name="searchContent"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
                <ErrorMessage component="p" name="searchContent" />
              </label>
            </div>
            <button type="submit">Search</button>
          </Form>
        </header>
      </Formik>
    </div>
  );
};

export default SearchBar;
