import CommonForm from "@/components/common/CommonForm";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { useState } from "react";
import { Fragment } from "react";


const initialFormData = {
  image : null,
  title : "",
  category : "",
  brand : "",
  price : "",
  salePrice : "",
  totalStock : ""
}

const AdminProducts = () => {
    const [openCreateProductsDialog,setOpenCreateProductsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    function onSubmit () {

    }
  return (

    <Fragment>
      <div className="mb-5 w-full flex justify-end"> 
        <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet open={openCreateProductsDialog} onOpenChange={() => {
          setOpenCreateProductsDialog(false)
        }}>
          <SheetContent side="right" className="overflow-auto" aria-describedby={undefined}>
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <div className="py-6 px-4">
                <CommonForm 
                formData={formData}
                setFormData={setFormData}
                formControls={addProductFormElements}
                onSubmit={onSubmit}
                buttonText="Add"
                />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>

  );

};

export default AdminProducts;