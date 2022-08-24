class Api::V1::ItemsController < Api::ApplicationController

    before_action :authenticate_user!, except: [:index, :show]

    def index
        items = Item.order(created_at: :desc)
        render(json: items, each_serializer: ItemCollectionSerializer)
        # we will provide 'each_serializer' named argument to the option hash of the render method that tells which serializer to use with each instance
    end

    def show
        item = Item.find(params[:id])
        # return a single item in json format
        render(json: item)
    end

    def create
        item = Item.new(item_params)
        # item.user = User.first #hard code the user for now
        item.user = current_user
        if item.save!
            #.save! will throw an error if ythe item model is invalid
            render json: { id: item.id }
        else
            render(
                json: { errors: item.errors.messages },
                status: 422 #unprocessable entity HTTP status code
            )
        end

        # item.save!
        # render json: { id: item.id }
    end

    def destroy
        item = Item.find(params[:id])
        # based on the id of the user request, delete that item
        if item.destroy
            # head :ok
            render( json: {status: 200 })
        else
            #head :bad_request
            render( json: {status: 500 })
        end
    end

    private

    def item_params
        params.require(:item).permit(:title, :description, :reserve_price)
    end

    # protected

    # #protected is like private except that it prevents
    # #decendent classes from using the protected methods

    # def record_not_found(error)
    #     render(
    #         status: 404, #alias :not_found
    #         json: {
    #             errors: [
    #                 {
    #                     type: error.class.to_s,
    #                     message: error.message
    #                 }
    #             ]
    #         }
    #     )
    # end

    # def record_invalid(error)
    #     invalid_record = error.record
    #     errors = invalid_record.errors.map do |errorObject|
    #         {
    #             type: error.class.to_s,
    #             record_type: invalid_record.class.to_s,
    #             field: errorObject.attribute,
    #             message: errorObject.options[:message]
    #         }
    #     end
    #     render(
    #         json: { status: 422, errors: errors},
    #         status: 422 #alias :unprocessable entity
    #     )
    # end

end
