class BookingsController < ApplicationController
    before_action :find_booking, only: %i[show]
    before_action :find_user_booking, only: %i[show_user_booking]
    skip_before_action :authorize, only: %i[create index show show_user_booking]
    skip_before_action :authorize_freelancer, only: %i[create index show show_user_booking]
    
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        render json: @booking
    end

    def show_user_booking
        render json:@user_booking
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

    def find_user_booking
        @user_booking = Booking.where(user_id:params[:id])
    end

    def booking_params
        params.permit(:user_id, :freelancer_id, :service_id, :booking_date)
    end
end
