import Qverview from '../../components/Forms/Qverview/Qverview';
import FormControls from '../../components/Forms/FormControls/FormControls'
import FormText from '../../components/Forms/FormText/FormText'
import Select from '../../components/Forms/Select/Select'
import ChecksAndRadios from '../../components/Forms/ChecksAndRadios/ChecksAndRadios'
import Range from '../../components/Forms/Range/Range'
import InputsGroup from '../../components/Forms/InputGroup/InputGroup'
import FloatingLabels from '../../components/Forms/FloatingLabels/FloatingLabels'
import Layout from '../../components/Forms/Layout/Layout'
import Validation from '../../components/Forms/Validation/Validation'


function FormsPage() {
    return (
     <>
          <Qverview/>
          <FloatingLabels/>
          <ChecksAndRadios/>
          <InputsGroup/>
          <FormControls/>
          <Layout/>
          <Range/>
          <FormText/>
          <Select/>
          <Validation/>
       </>
    );
  }
  
  export default FormsPage;