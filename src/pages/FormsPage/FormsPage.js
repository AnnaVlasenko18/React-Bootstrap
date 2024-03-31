import Qverview from '../../components/Forms/Qverview/Qverview';
import FormControls from '../../components/Forms/FormControls/FormControls'
import FormText from '../../components/Forms/Form text/Form text'
import Select from '../../components/Forms/Select/Select'
import ChecksAndRadios from '../../components/Forms/ChecksAndRadios/ChecksAndRadios'
import Range from '../../components/Forms/Range/Range'
import InputsGroup from '../../components/Forms/InputGroup/InputGroup'
import FloatingLabels from '../../components/Forms/FloatingLabels/FloatingLabels'
import Layout from '../../components/Forms/Layout/Layout'



function FormsPage() {
    return (
     <>
       <h1>Forms</h1>
          <Qverview/>
          <FormControls/>
          <FormText/>
          <Select/>
          <ChecksAndRadios/>
          <Range/>
          <InputsGroup/>
          <FloatingLabels/>
          <Layout/>
       </>
    );
  }
  
  export default FormsPage;