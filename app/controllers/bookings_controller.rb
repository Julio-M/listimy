class BookingsController < ApplicationController
    before_action :find_booking, only: %i[show]
    skip_before_action :authorize, only: %i[create index show]
    skip_before_action :authorize_freelancer, only: %i[create index show]
    
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        render json: @booking
    end


    def create
        new_booking = Booking.create!(booking_params)
        render json: new_booking, status: :created
    end


    private
    # goes under private
    #to be used with show, update and destroy
    def find_booking
     @booking = Booking.where(freelancer_id:params[:id])
    end

    def booking_params
        params.permit(:user_id, :freelancer_id, :booking_date)
    end
end
